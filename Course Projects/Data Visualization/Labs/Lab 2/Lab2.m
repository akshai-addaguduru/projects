clear all;
close all;
clc;

% for loop
% a = 1:6;
% b = 6:-1:1;
% c = 5:10;
% count = 0;
% for i = 1:6
%     count = count+a(i);
% end
% disp(count);
% 
% plot(a,b,a,c,b,c);

x = 0:pi/100:2*pi;
y1 = sin(x);
y2 = cos(x);
plot(x,y1,x,y2);