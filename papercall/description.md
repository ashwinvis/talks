Open-science is a promising trend of doing science with new open-source
methods and tools. There are a lot of ways to do open-science and many things
are still to be invented. The open-science movement is strong but there are
also strong reservations and obstacles. In particular, one of the major problems
is the lack of knowledge on programming methods and tools for most scientists
and technicians.

The prevalent modus operandi of developing scientific codes may be summarized as
follows. On one end of the spectrum there is a plethora of in-house codes built
on traditional programming languages, such as C, C++ and FORTRAN. On the other
end are scientific codes built on top of commercial software.

In-house source code implementations offer full access to the internal
clockwork of the code and are quite efficient. On the flip side, such codes
often use customized ASCII or binary I/O formats, lack comprehensive
documentation and continuous testing. By design, these programming languages
require more man-hours for development process of a new feature, unless relied
upon an external library such as BLAS, Boost and NAG to name a few. Hence, such
codes have a larger user base than developers and discourage collaboration. To
quote from Haskell wiki, "We should continue to move to higher levels of
abstraction, just like we've done before. We should trade application speed for
increased productivity, stability and maintainability. Programmer time is
almost always more expensive than CPU time. We aren't writing applications in
assembler anymore for the same reason we shouldn't be writing applications in C
anymore."

Commercial software based codes attract users and developers alike due to out
of the box implementations of many scientific tools and functions. This
combined with an integrated development environment makes code development
simpler. However, other drawbacks ensue such as license requirements for
deploying code, lack of documentation, testing and often inferior runtime
performance.

Python and its scientific ecosystem is a great platform for developing
open-science. It is advantageous to use Python as a language for science, since
it is easy to learn and very generalist. Python is good for most of the tasks
that need to be done for research and teaching. Python skills increase
employability for students and working with Python links to the world of
software development much more than working with other specialized tools like
MATLAB and LabVIEW. With Python, it is possible to combine the advantages of
both worlds, i.e. traditional programming languages and commercial software,
with other bonuses like good frameworks for standard I/O formats, documenting,
testing and interfacing with other languages.

I will present and discuss the work of scientific pythoneers to foster
open-source software, Python and open-science in the field of fluid
dynamics. We are still at the beginning of this dynamics in my field. I will
present how we work on Python and programming training for scientists. We
strive to produce at the same time as our scientific results, specialized
frameworks for research and teaching with Python. In 2014, we launched the
project FluidDyn, which supports the development of a set of Python packages for
laboratory experiments (fluidlab), numerical simulations (fluidfft, fluidsim)
and data processing (fluidimage). The unifying aspect of the above packages
is a simple scripting and GUI interface for a potential user; and a modular,
object-oriented design to promote code reuse and adding functionality. I will
present some of the nicest features of these packages (in particular those using
cutting-edge Python tools) and how we use these packages in real research to do
open fluid dynamics.
