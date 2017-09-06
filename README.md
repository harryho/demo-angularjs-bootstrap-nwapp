# dotnet-angularjs-bootstrap-nwapp
NW App is a demo app based on AngularJs and Bootstrap. NW App is built with .Net solution, and it provides basic and simple CRM management features. 

```
NW Demo App 
      |-- Dashboard 
           |-- New messages
           |-- Sales chart
           |-- 
      |-- Sales management 
           |-- New order 
           |-- Update order 
      |-- Inventory management 
           |-- New product 
           |-- Update product
      |-- Report
          
      |-- Setting   
           |-- Profile setting
           |-- Report setting
           |-- Admin tool ( optional ) 

Data Structure: 
      Customer * <--> * Order *<-->1 OrderDetail 1<-->1 Product 

      Order 1<-->1 Employee 1 <-> 1 Team

      Order 1<-->1 Shipper

      Product 1<-->1 Supplier 

      Product 1<-->1 Category

      Order *<-->1 OrderDetail      
```

---


Snapshots

#Web or PC snapshot

![Web snapshot](https://github.com/harryho/demo-angularjs-bootstrap-nwapp/blob/master/snapshots/demo-ng-boot-web.PNG)

#Tablet snapshot
![Tablet snapshot](https://github.com/harryho/demo-angularjs-bootstrap-nwapp/blob/master/snapshots/demo-ng-boot-tablet.PNG)

#Mobile snapshot
![Mobile snapshot](https://github.com/harryho/demo-angularjs-bootstrap-nwapp/blob/master/snapshots/demo-ng-boot-mobile.PNG)
