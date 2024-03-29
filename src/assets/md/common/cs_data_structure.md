## **기술 면접 정리 - 자료구조**
---

⭐
#### <span style="color: green">**힙**</span>
힙은 최대값 혹은 최소값을 빠르게 찾기 위한 이진트리 입니다.  
최소 힙의 경우에 부모는 자식보다 작고, 최대 힙의 경우에는, 부모는 자식보다 커야합니다.  
힙의 삭입과 삭제는 O(logN) 만큼의 시간복잡도를 갖습니다.  
</br>

⭐
#### <span style="color: green">**이진 탐색 트리**</span>
이진 탐색 트리는 왼쪽 자식은 부모보다 작고, 오른쪽 자식은 부모보다 큰 이진 트리가 이진 탐색 트리 입니다.  
이진 탐색 트리는 삽입, 검색, 삭제가 모두 트리의 높이인 O(logN~N) 만큼의 시간복잡도를 갖습니다.  
트리가 편향되지 않기 위해서 자가 균형 트리를 사용합니다.
</br>

⭐
#### <span style="color: green">**자가 균형 트리**</span>
이진 탐색 트리는 시간복잡도가 트리의 높이에 따라 결정되므로 편할될 경우 효율이 떨어집니다.  
편향되지 않게 트리를 재배치하고 삽입과 삭제를 개선한 이진 탐색 트리를 자가 균형 트리라고 합니다.
자가 균형 트리에는 AVL트리와, RedBlack 트리가 있습니다.

⭐
#### <span style="color: green">**해시**</span>
해시는 해시에 매핑하여 데이터를 저장하는 자료구조 입니다.  
key는 hash function을 통해 hash로 변경된 다음에, value와 매핑되어서 bucket에 저장되게 됩니다.  
시간복잡도는 삽입, 삭제, 조회가 모두 O(1) 만큼의 시간복잡도를 갖습니다.  
</br>

⭐
#### <span style="color: green">**해시 충돌 회피 방법**</span>
충돌회피 기법은 해시에서, 하나의 버킷에 여러 개의 데이터가 들어갈 때 그 충돌을 회피하는 방법으로, Open Addressing과 Chainging이 있습니다.  
Open Addressing은 다른 해시값에 저장하는 방법이고 Chainging은 해쉬 테이블이 원소 하나를 담는게 아니라 Linked List를 담는 방법입니다.
</br>
</br>
</br>
</br>

