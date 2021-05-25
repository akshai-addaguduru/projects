close all;
clear all;
clc;

npoints = 150;
ndims = 4;
data = zeros(ndims, npoints);

for i = 1:npoints
    for j = 1:ndims
        data(j,i) = randn;
    end
end

hold on;
for i = 1:npoints
    plot(data(:,i));
end
hold off;

set(gca, 'xtick',[1 2 3 4]);
set(gca,'xticklabel',{'x1','x2','x3','x4'});

