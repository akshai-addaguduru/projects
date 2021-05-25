function b = createBarChart(data, methods, legends, chart_title)
%createBarChart Summary of this function goes here
%Detailed explanation goes here
b = bar(data);
legend(legends);
set(gca,'XTickLabel',methods);
title(chart_title);
h = gca;
h.XTickLabelRotation = 60;
end

