clear all;
close all;
clc;

load fisheriris;
[idx,C] = kmeans(meas,3,'dist','sqeuclidean');
figure;
plot(meas(:,1),meas(:,2),'bs','MarkerSize',5);
ptsymb = {'bs','r^','md','go','c+'};
    for i = 1:3
        clust = find(idx==i);
        plot(meas(clust,1),meas(clust,2),ptsymb{i});
        hold on;
    end
    plot(C(:,1),C(:,2),'rx','MarkerSize',15,'LineWidth',3);
    title 'Fisher''s Iris Data';
    xlabel('Sepal Lengths(cm)');
    ylabel('Petal Lengths(cm)');
    hold off;
    
    
 