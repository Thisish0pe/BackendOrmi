'''
list -> 배열

1. 시퀀스형 -> 순서를 가지고 있다. -> 인덱스를 가지게 됨 -> 인덱싱, 슬라이싱 가능함 -> 인덱스를 이용한 함수 사용 가능 
(데이터 타입에서는 문자열이 시퀀스형)

2. 값 변경 가능

Mutable vs. Immutable

1. mutable
- 리스트, 딕셔너리, 셋

2. immutable 
- 숫자, 문자, 튜플

3. 둘의 차이점
1) 가르키는 것이 변하는가 아닌가에 대한 차이

얕은 복사 vs. 깊은 복사
1) 얕은 복사(mutable)
하나가 변경 되었을 때 다른 것이 변경되는 것 = 같은 메모리 (주소)를 참조하고 (가리키고) 있다.

1-1) 할당(=), 슬라이싱[:], object.copy() -> mutable 에서는 얕은 복사로 이루어져 있음

2) 깊은 복사 (immutable)
객체를 복사하는 것 (똑같은 것이 별도로 두 개 있다고 생각하기) + Id 값은 같다 (-> int 형에서 자주 사용되는 것은 파이썬에서 미리 올려놓음. 초반 할당할 때는 가리키는 것만으로도 메모리 값을 빠르게 가져올 수 있는 것. 메모리 할당량을 효율적으로 사용 가능)

3) copy() -> 얕은복사
   deepcopy() -> 깊은복사 
'''

list1 =[1,2,3,4]
list2 = list 1

list1.append(5)

# x = [1,2]
# x = y
# y.append(3)
# print(x)