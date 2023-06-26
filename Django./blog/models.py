from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField()
    writer = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True) #수정 되었을 때 시간 변경이 안 되도록 하는 것 
    updated_at = models.DateTimeField(auto_now=True)


class Comment(models.Model):
    post = models.ForeignKey('Post', on_delete=models.CASCADE) #내가 참조할 포스트가 무엇인가?
    content = models.TextField()
    writer = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True) #수정 되었을 때 시간 변경이 안 되도록 하는 것 

    # 보여지는 제목들을 __str__에 맞춰서 하겠다
    def __str__(self):
        return f'Comment on {self.post.title}'


class HashTag(models.Model):
    post = models.ForeignKey('Post', on_delete=models.CASCADE)
    # 관계형 데이터 베이스 with Post table
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name
        # 태그명만 가져오게 하는 것 