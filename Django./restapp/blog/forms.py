# blog/forms.py
from django import forms
from .models import Post, Comment, HashTag

# Form 일반 작성 법 () : html에 있는 form 태그
# Model Form 작성 법 [] : model 을 사용하는 form
# Form  작성은 사용자 입력 값에 대한 유효성 검사를 위한 것
# 유효성 검사를 왜 할까? 클라이언트가 보내는 값이 안전한지 보는 것
# 프론트와 백엔드 단에서 한 번 막아줌 장고에서는 Forms 라는 파일을 통해서 한 번에 편리하게 유효성 검사


class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = ['title', 'content']  # form 어떤 걸 제공할꺼야?


class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment
        fields = ['content']
        # widgets 화면출력과 관련된 것
        widgets = {
            'content': forms.Textarea(attrs={'rows': '3', 'cols': '50'})
        }
        # attrs 속성 값 주는 것 : 속성은 html 속성 값을 줄 수 있다.


class HashTagForm(forms.ModelForm):

    class Meta:
        model = HashTag
        fields = ['name']
