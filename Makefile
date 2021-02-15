LOCALIZED ?= 0

IPYNBDIR := ipynb
IPYNBFILES := $(shell find $(IPYNBDIR) -name '*.ipynb')
IPYNBPRES := $(basename $(IPYNBFILES))
IPYNBCSS := custom.css
ifeq ($(LOCALIZED), 1)
  IPYNBCONFIG := $(IPYNBDIR)/config_localized.py
else
  IPYNBCONFIG := $(IPYNBDIR)/config.py
endif

NBCONVERT_ROOT := $(shell python -c "import site; print(site.PREFIXES[0])")/share/jupyter/nbconvert/
RPWD := $(shell pwd | sed -e 's,\/,\\\/,g')

define STR_HELP
This makefile can be used for

help: print this help.

list: print a list of Jupyter notebook presentations

ipynb/*.ipynb: make the slides and display them (use Control-C to stop this server).
	for example: make ipynb/seminar2019.ipynb

talks/*.slide.html: build static html slides. Note: this command is sensitive
	to the environment variable LOCALIZED. LOCALIZED will use assets from node_modules

<dir>/talk.md: create a new cicero talk

<dir>/talk: launch cicero talk as a Flask server (use Control-C to stop this server).

<dir>/talk.pdf: generate PDF of a cicero talk using decktape

endef

export STR_HELP

.PHONY: help notebook $(IPYNBPRES) assets

help:
	@echo "$$STR_HELP"
	@echo jupyter-nbconvert templates: $(NBCONVERT_ROOT)

list:
	@echo $(IPYNBPRES)

cleantpl:
	rm -rf assets/base assets/reveal

ifeq ($(LOCALIZED), 1)
assets: cleantpl
	cp -r $(NBCONVERT_ROOT)/templates/base assets/
	cp -r $(NBCONVERT_ROOT)/templates/reveal assets/

localize: assets
	@echo 'Localized node packages enabled'
	sed -i -E 's|https://cdnjs.cloudflare.com/ajax/libs|../node_modules|' assets/base/mathjax.html.j2
	sed -i -E 's|mathjax/2.7.7|mathjax|' assets/base/mathjax.html.j2
	#ln -rsf node_modules/mathjax/latest.js node_modules/mathjax/MathJax.js
else
localize:
	@echo 'Localized node packages disabled'
endif

# --ServePostProcessor.ip='127.0.0.2'
$(IPYNBPRES): ipynb%: ipynb%.ipynb
	cd ipynb && jupyter-nbconvert $(notdir $<) --to slides --post serve

index.html: ipynb/index.ipynb
	jupyter-nbconvert ipynb/index.ipynb --to html --output-dir $(PWD)

talks/%.slides.html: ipynb/%.ipynb localize
	jupyter-nbconvert $< --to slides --output-dir $(dir $@) --Application.log_level=10 --config=$(IPYNBCONFIG)
	cp -f $(dir $<)$(IPYNBCSS) $(dir $@)$(IPYNBCSS)

%.zip: talks/%.slides.html
	7z a $@ talks/fig/agu_* talks/fig/flow_* talks/fig/logo_* $< talks/custom.css node_modules

%/talk.md:
	@echo "Preparing a new talk from template"
	@rsync -aPL template/talk* $(dir $@)
	@cp -av template/images $(dir $@)

%/talk:
	cicero -f $@.md &

%/talk.: %/talk
	@echo Did you mean $(dir $@)talk?

%.pdf: %
	decktape http://127.0.0.1:5000/ $@
	killall cicero
