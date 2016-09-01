# dev161
SAP TechEd 2016: 	Intro to SAP HANA Extended Application Services, Advanced Model Development 2 Hour Hands-On - Demo
With SAP HANA SPS 11, SAP has introduced a major new application server architecture: SAP HANA extended application services, advanced model. This new architecture is based upon Cloud Foundry and the concepts of microservices. It expands the support runtimes to include Node.js and Apache Java- based development. In this session we will develop a first Node.js-based application using SAP HANA extended application services and SAP Web IDE for SAP HANA.

Demo 1
EXERCISE 1 – HELLO WORLD
Objective
In this first exercise, we will connect to the remote system, run the new project wizard, and then create an HTML5 module to serve as the application endpoint and proxy all of our services and client-side content. At the end of this exercise you will be able to connect to your server via web browser and see a Hello World message.

EXERCISE 2 –DATABASE ARTIFACT DEVELOPMENT
Objective
In this exercise, we will continue to develop our overall application. Applications in the HANA/XS Advanced world, are often made up of multiple modules at design time which deploy to separate micro-services or database container content. We created client side UI application content in the first exercise using the HTML5 module. In this exercise we will create database artifacts, such as database table, stored procedures and user defined functions, using the HDB (HANA Database) module. We will then see how we build these database artifacts using the new container-based, schema-less HDI (HANA Deployment Infrastructure) concepts. 

Exercise Description 
•	Database Tables via HDBCDS
•	Initial table data load via CSV
•	Deploy to HANA via HDI

EXERCISE 3 –XSJS AND XSODATA SERVICES 
Objective
For this exercise we will now build the XSJS and XSODATA services used to expose our data model to the user interface. Although XS Advanced runs on node.js, SAP has added modules to node.js to provide XSJS and XSODATA backward compatibility. Therefore you can use the same programming model and much of the same APIs from XS, classic even within this new environment. .

Exercise Description 
•	Node.js XSJS Bootstap
•	XSJS Services
•	XSODATA Services

EXERCISE 4 – SAPUI5 USER INTERFACE 
Objective
For this exercise we will build a proper SAPUI5 user interface that consumes both the XSJS and XSODATA services from our Node.js module.

Exercise Description 
•	SAPUI5 Entry Point
•	SAPUI5 Component 
•	SAPUI5 Views
•	SAPUI5 Controllers
