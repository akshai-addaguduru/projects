clear all;
close all;
clc;

load fisheriris;
[idx,C] = kmeans(meas,3,'dist','sqeuclidean');

ptsymb = {'bs','r^','md','go','c+'};
for i = 1:3
        clust = find(idx==i);
        plot3(meas(clust,1),meas(clust,2),meas(clust,3),ptsymb{i});
        hold on
end
plot3(C(:,1),C(:,2),C(:,3),'rx','MarkerSize',15,'LineWidth',3);
    hold off
    title 'Fisher''s Iris Data';
    xlabel('Sepal Lengths');
    ylabel('Sepal Lengths');
    zlabel('Petal Lengths');
    hold off;
    grid on