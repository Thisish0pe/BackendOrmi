'''
Class : 코드를 재사용하기 위해서 -> 함수 모음집 (원하는 기능들만 묶어서 사용하겠어)

계산기

class  틀
Instance 틀로 찍어낸 결과물 
Method  클래스 내부 함수
'''
# 더하기 클래스 
class Add:
    def __init__(self): #__init__ 무조건 사용되는 친구 설정
        self.result = 0
    
    def add(self, number):
        self.result += number
        return self.result


# Add로 만든 결과물(객체, 인스턴스)
'''
Add
- 인스턴스
    result = 0 
    def add()
'''
add_func = Add()
add_func2 = Add()

add_func.add(5)

# 클래스의 상속 : 내가 정의하지 않아도 외부에 정의된 기능 사용하고 싶을 때 사용
#class Sub
# class Add(Sub)
# sub2

# 메서드 오버라이딩 : 상속 받아온 기능을 재정의해서 쓸 때 