close all;
clear all;
clc;

data = {'Alaska',571951;
'Texas', 261797;
'California',155959;
'Montana',145552;
'New Mexico',121356;
'Arizona',113635;
'Nevada',109826;
'Colorado',103718;
'Oregon',95997};

colors = ones(10,3);
rectangles = treemap([data{:,2}]);
labels = data(:,1);
plotRectangles(rectangles,labels,colors);
outline(rectangles);