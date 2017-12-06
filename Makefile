
IPYNBDIR := ipynb

IPYNBFILES := $(shell find $(IPYNBDIR) -name '*.ipynb')

IPYNBPRES = $(basename $(IPYNBFILES))


define STR_HELP
This makefile can be used for

help: print this help.

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

# --ServePostProcessor.ip='127.0.0.2'
$(IPYNBPRES): ipynb%: ipynb%.ipynb
	cd ipynb && jupyter-nbconvert $(notdir $<) --to slides --post serve

index: ipynb/index.ipynb
	jupyter-nbconvert ipynb/index.ipynb --to html --output-dir ${PWD}

# Make slides as static HTML files
phd_summer_seminar:
	jupyter-nbconvert ipynb/$@.ipynb --to slides --output-dir talks --reveal-prefix=../reveal.js

agu_fallmeeting2017:
	jupyter-nbconvert ipynb/$@.ipynb --to slides --output-dir talks --reveal-prefix=../reveal.js --config=ipynb/$@_config.py
	cp -f ipynb/$@.css talks/custom.css
