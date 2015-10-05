# cloud-weatherapp

Intro
-----------

When asked about the benefits of cloud computing one common argument is usually its **on-demand** character. And indeed, in our time where everybody is busy it's a huge advantage to be able to access information whenever needed, from anywhere. Or as we keep saying: "_Convenience trumps everything else!_"

Same rationale is true when it comes to upskilling - the speed of innovation and technology is constantly accelerating and it's more important than ever to hone your skills to stay up to date (or should we even say _to stay relevant_?) Given the usual time constraints developers face to learn about new technologies the only viable way is to make it as simple as possible/convenient to do so.

For us at the SAP HANA Cloud Platform team this mindset has became sort of a mantra and it has been the guiding principles for all that we do in regards to developer outreach. Just take the [openSAP courses](https://open.sap.com/courses) organized by [Rui Nogueira](http://scn.sap.com/people/rui.nogueira) , the end-to-end scenarios brought to you by [Jens Glander](http://scn.sap.com/people/jens.glander), [Bertram Ganz](http://scn.sap.com/people/bertram.ganz) and [Thomas Bieser](http://scn.sap.com/people/thomas.bieser) or all the sample code hosted right here at [github.com](https://github.com/SAP) as prominent examples.

In that tradition, we're happy to present you a new end-to-end hands-on tutorial that will take you **from zero to hero in roughly four hours** teaching you how-to combine the most-commonly used platform services to build a full-fledged mobile weather app.

<p align="center">
  <img src="/doc/weatherapp.png" width="75%">
</p>

**Note**: While basic knowledge of Java and the Eclipse IDE is helpful, they are no hard requirements to finish this tutorial, which has explicitly been designed for newbies to the platform. In fact, we provide links and references to the respective frameworks, tools and technologies used for those that want to dig deeper on their own afterwards.

Quick start
-----------

As promised by the title we'll start completely from scratch and then build out the app step-by-step. Here's a high-level overview of the individual steps:

1.  Is there any other/better way to start than with the classic "Hello World"?
2.  Let's add authentication so that we know whom we are dealing with.
3.  We'll learn how-to expose services via REST to provide an external API (e.g. to be consumed by other apps or the UI)
4.  We add a persistence layer to manage bookmarking of favorite cities
5.  We then enhance the persistence layer to be multi-tenant-capable
6.  Next, we show you how-to use the connectivity service to consume an external service (in our case one that provides weather information)
7.  Last, we'll develop a mobile UI using a master-detail template based on [OpenUI5](http://openui5.org/getstarted.html)

Curious? Hopefully so - get your hands dirty following the [tutorial](https://github.com/SAP/cloud-weatherapp/raw/master/cloud-weatherapp-script.pdf).

Have fun coding!

PS: If you should get lost along the way... don't worry! We have created check-points after each step and you can always download the project in the respective state using the respective [Release](https://github.com/SAP/cloud-weatherapp/releases).

Versioning
----------

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, the SAP HANA Cloud Platform - Samples project will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit http://semver.org/


Authors
-------

**Matthias Steiner**

+ http://twitter.com/steinermatt
+ http://github.com/steinermatt


Copyright and license
---------------------

Copyright (c) 2015 SAP SE

Except as provided below, this software is licensed under the Apache License, Version 2.0 (the "License"); you may not use this software except in compliance with the License.You may obtain a copy of the License at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
