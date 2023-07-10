from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField()
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(
        auto_now_add=True)  # 수정 되었을 때 시간 변경이 안 되도록 하는 것
    updated_at = models.DateTimeField(auto_now=True)


class Comment(models.Model):
    post = models.ForeignKey(
        'Post', on_delete=models.CASCADE)  # 내가 참조할 포스트가 무엇인가?
    content = models.TextField()  # 비어있으면 안돼 Null=True Blank=True 안해주었기 때문
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(
        auto_now_add=True)  # 수정 되었을 때 시간 변경이 안 되도록 하는 것

    # 보여지는 제목들을 __str__에 맞춰서 하겠다
    def __str__(self):
        return self.content


class HashTag(models.Model):
    # '내부 상위에 있는 클래스 상속 받을 때는 '' 사용'
    post = models.ForeignKey('Post', on_delete=models.CASCADE)
    # 관계형 데이터 베이스 with Post table
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name
        # 태그명만 가져오게 하는 것
