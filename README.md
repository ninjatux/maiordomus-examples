#Description
This repository is just an examples container for the utility **[Maiordomus](https://github.com/NinjaTux/maiordomus)**.

##Setup
Clone this repository and run ```npm install``` to install the required dependencies.
A part of node modules you'll need an OpenSSH server up and running in order to try the examples ``getremote``, ``putremote`` and ``exec``.
The OpenSSH server could also be on the same machine where you run the examples.

Before running the examples change the file ```maiordomus/config.js``` according to your needs.

##Examples
This is the list of examples available in this project, for every new feature a new example will be created. Examples list:

* **flow**, show how the flow control of Mairodomus works
* **templating**, illustrate how you can use templates in Maiordomus commands
* **exec**, executes commands both locally and remotely
* **getremote**, save a reomote file locally
* **putremote**, save a local file remotely
