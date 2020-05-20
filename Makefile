IPYNBDIR := ipynb
IPYNBFILES := $(shell find $(IPYNBDIR) -name '*.ipynb')
IPYNBPRES := $(basename $(IPYNBFILES))
IPYNBCONFIG := $(IPYNBDIR)/config.py
IPYNBCSS := custom.css

NBCONVERT_ROOT := $(shell pip show nbconvert | awk '/Location/{printf("%s/%s", $$2, "nbconvert")}')
RPWD := $(shell pwd | sed -e 's,\/,\\\/,g')

define STR_HELP
This makefile can be used for

help: print this help.

notebook: run a jupyter-notebook.

ipynb/pres*: make the slides and display them (use Control-C to stop this server).
             for example: make ipynb/pres00_intro_first_steps

talks/pres*.slide.html: build static html slides

endef

export STR_HELP

.PHONY: help notebook $(IPYNBPRES) assets

help:
	@echo "$$STR_HELP"

notebook:
	cd ipynb && python $(shell which jupyter-notebook)

lab:
	cd ipynb && python $(shell which jupyter-lab)

list:
	@echo $(IPYNBPRES)

cleantpl:
	rm -f assets/*.tpl

assets/%.tpl: $(NBCONVERT_ROOT)/templates/html/%.tpl
	cp -f $< $@

assets: cleantpl assets/mathjax.tpl assets/slides_reveal.tpl

localize: assets
	sed -i -E 's|https://cdnjs.cloudflare.com/ajax/libs|../node_modules|' assets/mathjax.tpl
	sed -i -E 's|mathjax/2.7.5|mathjax|' assets/mathjax.tpl
	#ln -rsf node_modules/mathjax/latest.js node_modules/mathjax/MathJax.js

# --ServePostProcessor.ip='127.0.0.2'
$(IPYNBPRES): ipynb%: ipynb%.ipynb
	cd ipynb && jupyter-nbconvert $(notdir $<) --to slides --post serve

index.html: ipynb/index.ipynb
	jupyter-nbconvert ipynb/index.ipynb --to html --output-dir $(PWD)

# Make slides as static HTML files
agu_fallmeeting2017: localize
	jupyter-nbconvert ipynb/$@.ipynb --to slides --output-dir talks --config=ipynb/$@_config.py
	cp -f ipynb/$@.css talks/custom.css


talks/%.slides.html: ipynb/%.ipynb localize
	jupyter-nbconvert $< --to slides --output-dir $(dir $@) --config=$(IPYNBCONFIG) --Application.log_level=10
	cp -f $(dir $<)$(IPYNBCSS) $(dir $@)$(IPYNBCSS)

%.zip: talks/%.slides.html
	7z a $@ talks/fig/agu_* talks/fig/flow_* talks/fig/logo_* $< talks/custom.css node_modules


seminar2019: talks/seminar2019.slides.html

cicero%:
	cicero -f $(dir $@)talk.md &

%.pdf: cicero%
	decktape http://127.0.0.1:5000/ $@
	killall cicero
