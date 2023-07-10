# from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
# from .models import User
from django.contrib.auth import get_user_model


User = get_user_model()  # Auth 로 확장된 모델 가져오기


class RegisterForm(UserCreationForm):

    class Meta:
        model = User
        fields = ['email']
        # fields = UserCreationForm.Meta.fields + ('email',)


class LoginForm(AuthenticationForm):

    class Meta:
        model = User
        fields = ['email', 'password']
        # fields = ['email', 'password']
        # widgets = {
        #     'email': forms.EmailInput(attrs={'placeholder': 'email'}),
        #     'password': forms.PasswordInput(attrs={'placeholder': 'password'}),
        # }
        #  우리가 이미 모델에서 만들었기 때문에 생략 가능
        # attrs 는 태그 안의 속성을 가져오는 것이기 때문에 style 도 넣을 수 있음
