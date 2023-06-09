from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View
from django.contrib.auth import authenticate, login, logout
from .models import Profile
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .forms import RegisterForm, LoginForm
from .serializers import ProfileSerializer

# Create your views here.
# user 관련된 기능
# 회원가입
# 로그인
# 로그아웃

# Registration


class Registration(View):
    def get(self, request):
        if request.user.is_authenticated:
            return redirect('blog:list')
        # 회원가입 페이지
        # 정보를 입력할 폼을 보여주어야 한다.
        form = RegisterForm()
        context = {
            'form': form,
            'title': 'User'
        }
        return render(request, 'user/user_register.html', context)

    def post(self, request):
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            # 로그인한 다음 이동
            return redirect('user:login')


# Login
class Login(View):
    def get(self, request):
        if request.user.is_authenticated:
            return redirect('blog:list')

        form = LoginForm()
        context = {
            'form': form,
            'title': 'User'
        }
        return render(request, 'user/user_login.html', context)

    def post(self, request):
        if request.user.is_authenticated:
            return redirect('blog:list')

        # 장고의 loginForm 사용했기 때문에 request 더 추가해야해
        form = LoginForm(request, request.POST)
        if form.is_valid():
            email = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(
                username=email, password=password)  # True, False

            if user:
                login(request, user)
                return redirect('blog:list')

        form.add_error(None, '아이디가 없습니다.')

        context = {
            'form': form
        }

        return render(request, 'user/user_login.html', context)


# Logout
class Logout(View):
    def get(self, request):
        logout(request)
        return redirect('blog:list')


# Profile
class ProfileWrite(APIView):
    # def get():
    #     pass # url로 이동
    def post(self, request):
        user = request.data.get('user')  # request.user
        image = request.data.get('image')
        age = request.data.get('age')

        profile = Profile.objects.create(user=user, image=image, age=age)
        serializer = ProfileSerializer(profile)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ProfileDelete(APIView):
    def post(self, request):
        # profile - user
        profile = Profile.objects.get(user=request.user)
        pass

# 숙제 update delete 만들기
