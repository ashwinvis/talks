
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
	jupyter-notebook

# --ServePostProcessor.ip='127.0.0.2'
$(IPYNBPRES): ipynb%: ipynb%.ipynb
	jupyter-nbconvert $< --to slides --post serve
