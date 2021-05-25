function outline(rectangles)
%outline Summary of this function goes here
%   Detailed explanation goes here
    for i = 1:size(rectangles,2)
        r = rectangles(:,i);
        xPoints = [r(1),r(1),r(1)+r(3),r(1)+r(3)];
        yPoints = [r(2),r(2)+r(4),r(2)+r(4),r(2)];
        patch(xPoints,yPoints,[0 0 0],'FaceColor','none')
    end
end

