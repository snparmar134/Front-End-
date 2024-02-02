#include<stdio.h>
int main()
{
	int days,weeks,years;
	printf("enter the days");
	scanf("%d",&days);
	
	years=(days/365);
	weeks=(years*365);                        
	printf("years:%d\n",years);
	printf("weeks:%d\n",weeks);
	return 0;
}