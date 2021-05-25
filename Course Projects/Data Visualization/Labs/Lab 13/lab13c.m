clear all;
close all;
clc;

load fisheriris;
[idx,C] = kmeans(meas,3,'dist','sqeuclidean');

labels = {'Sepal Length','Sepal Length','Petal Length','Petal Length'};
figure, h = parallelcoords(meas,'Group',idx,'Labels',labels);
figure, h = parallelcoords(meas,'Group',species,'Labels',labels);
