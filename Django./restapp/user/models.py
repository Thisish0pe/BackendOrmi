from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils import timezone

# Create your models here.
'''
Auth User model
- 생성
- 삭제
- 수정
--> UserManager helper class 도움주는 클래스
'''


class UserManager(BaseUserManager):

    def _create_user(self, email, password, is_staff, is_superuser, **extra_fields):
        if not email:
            raise ValueError('User must have an email')
        now = timezone.localtime()  # timezone.now() 는 db에서 utc로 나온다는 문제가 있음
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            is_staff=is_staff,
            is_active=True,
            is_superuser=is_superuser,
            last_login=now,
            date_joined=now,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    # create_user

    def create_user(self, email, password, **extra_fields):
        return self._create_user(email, password, False, False, **extra_fields)
    # create_superuser

    def create_superuser(self, email, password, **extra_fields):
        return self._create_user(email, password, True, True, **extra_fields)


class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True, max_length=255)
    name = models.CharField(max_length=50, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    last_login = models.DateTimeField(null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []
    # superuser 만들 때 필요한 것. admin 추가할 때 필요한 이메일과 패스워드만 요구하는 것. 빈공간으로 냅뒀다면!

    objects = UserManager()

    # def __str__(self):
    # return self.name


class Profile(models.Model):
    user = models.OneToOneField('User', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='user/media')
    # 이미지필드 사용 혹은 이미지를 사용하고 싶다면 pillow를 pip으로 저장하기
    age = models.IntegerField()
    created_at = models.DateTimeField(
        auto_now_add=True)
