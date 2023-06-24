'''
Function (함수)

코드는 중복을 최대한 피해야 해야해서 생겨난 것 
특정 기능을 정리한 것이 함수 
'''

def sum(x):
    return x + 1

sum(1)

def hello():
    print('hello')


# 매개변수 기본 값 설정 가능 
def sum_1(num1, num2=1): #num2에서 1을 기본 값으로 설정
    return num1 + num2

sum_1(1)

# 매개변수 가변인자: 매개변수가 정확히 정해지지 않았을 때
# *args = argument
def sum(*args): # 몇 개 넣을지 정하지 않겠다.
    retult = 0
    for i in agrs:
        result += i
    return result 

sum(1,2) # 가변인자는 튜플로 들어옴 
sum(1,2,3)

# 매개변수의 키워드인자: 매개변수를 키워드로 받을 때
# **kwargs
def sum_2(**kwargs):
    total = sum(kwargs.values())
    return total

print(sum_2(a=1, b=2)) # 키워드를 줄 수 있음/ 딕셔너리로 들어옴 

def sum_get(**kwargs):
    a = kwargs.get('a', 0) # value 에 접근
    b = kwargs.get('b', 0)
    b = kwargs.get('c', 0)
    total = a + b + c
    return total

result2 = sum_get(a=1, b=2, c=3)
pritn(result2)

# 변수의 범위(Scope)
# 전역 변수, 지역 변수

number = 0

def add_5(a):
    global number # 해야 전역변수를 가져올 수 있다.
    a = a + 5 
    number = a

add_5(5)
print(number)

# lambda 람다 함수
# lambda + 매개변수 + : + 기능 +
lambda_add = lambda a, b : a + b
print(lambda_add(1,2))