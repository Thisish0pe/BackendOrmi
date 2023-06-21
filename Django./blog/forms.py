# blog/forms.py
from django import forms
from .models import Post

# Form 일반 작성 법 () : html에 있는 form 태그
# Model Form 작성 법 [] : model 을 사용하는 form
# Form  작성은 사용자 입력 값에 대한 유효성 검사를 위한 것
# 유효성 검사를 왜 할까? 클라이언트가 보내는 값이 안전한지 보는 것 
# 프론트와 백엔드 단에서 한 번 막아줌 장고에서는 Forms 라는 파일을 통해서 한 번에 편리하게 유효성 검사
class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = ['title', 'content']