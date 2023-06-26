from django.db import models
# 인증기능에 있는 모델을 사용하겠다. 
from django.contrib.auth.models import AbstractUser

# 기존의 auth 의 기능을 사용할게. 
class User(AbstractUser):
    # User 정보 테이블 / unique 는 테이블 안에서 유일하게 하나만 있어야 해 / 유저들에게 중복 허용 안 함
    email = models.EmailField(unique=True, max_length=225)
    # 이름은 겹치는 경우가 많아요. / null: 0이 들어가도 돼/ blank: 아무 것도 안 들어가도 돼
    name = models.CharField(max_length=50, null=True, blank=True)
    password = models.CharField(max_length=50)
    registered_date = models.DateTimeField(auto_now_add=True)

    #views 안에서 유니크 한 값으로 이메일 사용한다는 것을 이야기 함
    USERNAME_FIELD = 'email'
    #중복해서 이메일을 쓰지 말라는 것
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.name