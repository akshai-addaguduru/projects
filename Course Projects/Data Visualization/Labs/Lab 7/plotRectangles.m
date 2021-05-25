function plotRectangles(rectangles,labels,colors)
%plotRectangles Summary of this function goes here
%   Detailed explanation goes here
    if(nargin<2)
        labels = []; %empty
    end
    if(nargin>3)
        colors = rand(size(rectangles,2),3).^0.5; % here .^0.5 means multiply each value by the power of 0.5 which is square root
    end
    
    for i = 1:size(rectangles,2)
        r = rectangles(:,i);
        xPoints = [r(1),r(1),r(1)+r(3),r(1)+r(3)];
        yPoints = [r(2),r(2)+r(4),r(2)+r(4),r(2)];
        patch(xPoints,yPoints,colors(i,:),'EdgeColor','none');
        if(~isempty(labels)
            text(r(1)+r(3)/2,r(2)+r(4)/2,1,labels{i},'VerticalAlignment','middle','HorizotalAlignment','center')
        end
    end
    axis equal
    axis tight
    axis off
end