# Django 교안
## 1. Django 란?
## 2. 환경 세팅
## 3. 배포 프로세스
1. 내가 window를 사용하고 있더라도 배포 환경과 동일한 환경 하나 구축합니다. (mac의 경우, 거의 mac에서 진행)
2. Django 코딩 후 GitHub에 내가 작성한 코드를 업로드한다.
3. 업로드한 코드를 서버쪽에서 다운로드 하여 실행시킨다. (python manage.py runserver)
* 2번과 3번을 통합하는 CI/CD 구축이라고 한다. push 하면 자동으로 테스트 서버에 배포되고 문제가 없다면 실 서버에 배포될 수 있도록 하는 편
## 4. Django tutorial
1. 어떤 파일이 수정되어야 하는지 아래의 이미지를 참고해주세요.
![](./%EC%9E%A5%EA%B3%A0%20%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC.png)
2. url을 설계한다.
```
hojun.com/
hojun.com/about    ->    about.html
hojun.com/product  ->    product.html
hojun.com/product/1->    productdetails.html
hojun.com/a        ->    a.html
hojun.com/c        ->    c.html
hojun.com/b        ->    b.html
```

3. urls.py 를 수정합니다. 다만, 지금 Django 가 설치되어있지 않기 때문에 Django를 설치합니다. (설계가 우선이기 때문에 위에서 충분히 기획을 한 다음, 한 번에 개발합니다. 본 교안은 클라우트 환경에서 직접 코딩합니다. AWS cloud9 클라우드 환경에서 직접 토딩할 수 있게 해줍니다.)
3-1. 클라우드란?
* 빌려쓰는 것을 이야기한다.
* IaaS (인프라) : 인프라만 빌려쓴다는 개념 (특정 하드웨어에 제한해서 빌려쓸 수 있음)
* SaaS (소프트웨어)
* PaaS (플랫폼)
3-1. 장고설치 명령어
```
pip install --upgrade pip 
mkdir mysite (mysite 폴더 만들겠다.)
cd mysite (mysite에 들어가겠다.)
python -m venv myvenv (myvenv 라는 가상환경을 만들겠다.)
source myvenv/bin/activate (가상환경에 들어가겠다.)
pip install django == 3.2 (장고 3.2 버전을 설정하겠다.)
django-admin startproject tutorialdjango . (현재 폴더에 tutorialdjango 라는 이름으로 프로젝트를 시작하겠다.)
python manage.py migrate (db에 반영하겠다.)
```

4. 설치가 다 되었으면 settings.py 폴더에서 기본 세팅을 해줍니다.
4-1. ALLOWED_HOST = [ '*' ] 로 변경해줍니다.

5. 서버를 구동해봅니다. (실제 개발할 때는 중간중간 실행하지 않습니다.)
```
python manage.py runserver 0:8080
```
클라우드에서 만든 것이기 때문에 바로 배포 가능합니다.

6. urls.py를 설계대로 코딩하기 위해 main이라는 앱을 만든다는 것을 가정하고 아래처럼 코딩합니다.
6-1. python manage.py startapp main (main 앱을 만들어봅니다.)
6-2. setting app 내부의 INSALLED_APP 에서 main 앱을 추가합니다.
6-3. urls.py에 들어가서 아래의 패턴을 넣습니다.

```
from django.contrib import admin
from django.urls import path
from main.views import index, about, product, productdetails, a, b, c

urlpatterns = [
    path('', index, name='index'),
    path('about/', about, name='about'),
    path('product/', product, name='product'),
    path('product/<int:pk>', productdetails, name='pd_detail'),
    path('a/', a, name='a'),
    path('b/', b, name='b'),
    path('c/', c, name='c'),
]
```
7. views.py 에서 함수를 아래와 같이 모두 만듭니다.
```
from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')

def about(request):
    return render(request, 'main/about.html')

def product(request):
    return render(request, 'main/product.html')

def productdetails(request, pk):
    return render(request, 'main/productdetails.html')

def a(request):
    return render(request, 'main/a.html')

def b(request):
    return render(request, 'main/b.html')

def c(request):
    return render(request, 'main/c.html')

```

8. main 파일 안에 template > main 파일들을 만들어 html 파일들을 또 다시 생성합니다.
예시 ) mysite/main/templates/main

9. mysite 에서 python manage.py runserver 0:80 에 들어가 각각의 url을 테스트 해봅니다. (productdetails 제외하고 모두 작동될 것입니다. 아래의 코드를 views 파일 내부 productdetials 에 함수 넣으면 작동 될 것입니다.)
* data의 경우 .html 에서 값을 읽어올 수 있는지 보여드리기 위함입니다.
```
def productdetails(request, pk):
    data = {
        'value': pk + 100
    }
    return render(request, 'main/productdetails.html', data)
```
9-1. 번외 ) data 안에 다른 것들도 넣어보면서 장고 문법을 잠깐 살펴보겠습니다.
```
준비중입니당
```
* 대괄호를 이용하면 error가 나기 때문에 인덱싱을 위해서는 dot(.)을 이용해주세요.
{{ one[0] }}  -> error
{{ one.0 }}   -> correct

10. models.py 에서 홈페이지에 들어갈 데이터베이스를 설계하겠습니다.
(코딩 전 설계는 필수입니다! 대개는 교안 2번에 해당하는 단계에서 설계를 실시합니다.)
```
from django.db import models

class Cafe(models.Model):
    name = models.CharField(max_length=50)
    content = models.TextField()
    
    def __str__(self):
        return self.name
```

11. DB 반영을 위해 아래의 코드를 입력합니다.
11-1. 위의 코드를 database 접근 가능 명령어 입력
python manage.py makemigrations 
11-2. 실제 DB 반영하는 명령어 입력
python manage.py migrate

12. admin에 Cafe를 등록하고 직접 게시글 작성 혹은 삭제를 위해 admin 파일에 코드를 입력합니다.
```
from .models import Cafe

admin.site.register(Cafe)
```

13. admin 에 접근하기 위해서 다음의 명령어를 입력합니다.
python manage.py createsuperuser