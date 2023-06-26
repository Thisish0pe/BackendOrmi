from django.shortcuts import render, redirect
from django.views import View
from django.urls import reverse_lazy, reverse

class IndexMain(View):
    def get(self, request):
        # 경로 쓸 때 앱 이름을 안 써도 돼요 
        return render(request, 'index.html')