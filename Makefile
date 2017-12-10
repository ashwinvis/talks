IPYNBDIR := ipynb

IPYNBFILES := $(shell find $(IPYNBDIR) -name '*.ipynb')

IPYNBPRES = $(basename $(IPYNBFILES))

NBCONVERT_ROOT := $(shell pip show nbconvert | awk '/Location/{printf("%s/%s", $$2, "nbconvert")}')

RPWD := $(shell pwd | sed -e 's,\/,\\\/,g')

define STR_HELP
This makefile can be used for

àÎVCE!àÎVCZ!import_parentC!!help: print this help.

notebook: run a jupyter-notebook.

ipynb/pres*: make the slides and display them (use Control-C to stop this server).

for example:

make ipynb/pres00_intro_first_steps

endef

export STR_HELP

.PHONY: help notebook $(IPYNBPRES)

help:
	@echo "$$STR_HELP"

notebook:
	cd ipynb && python $(shell which jupyter-notebook)

list:
	@echo $(IPYNBPRES)

cleantpl:
	rm -f js/*.tpl

js/%.tpl: $(NBCONVERT_ROOT)/templates/html/%.tpl
	cp -f $< $@
	sed -i -e 's/https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs/\.\.\/js/' $@

localize: cleantpl js/mathjax.tpl js/slides_reveal.tpl
	sed -i -e 's/mathjax\/2\.7\.1/MathJax-2\.7\.1/' ./js/mathjax.tpl

# --ServePostProcessor.ip='127.0.0.2'
$(IPYNBPRES): ipynb%: ipynb%.ipynb
	cd ipynb && jupyter-nbconvert $(notdir $<) --to slides --post serve

index: ipynb/index.ipynb
	jupyter-nbconvert ipynb/index.ipynb --to html --output-dir $(PWD)

# Make slides as static HTML files
phd_summer_seminar:
	jupyter-nbconvert ipynb/$@.ipynb --to slides --output-dir talks --config=ipynb/$@_config.py

agu_fallmeeting2017: localize
	jupyter-nbconvert ipynb/$@.ipynb --to slides --output-dir talks --config=ipynb/$@_config.py
	cp -f ipynb/$@.css talks/custom.css
