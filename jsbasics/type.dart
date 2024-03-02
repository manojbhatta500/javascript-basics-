void main() {
  for (int v = 0; v <= 10000; v++) {
    print(v);
    for (int w = 0; w <= 500000; v++) {
      if (w % 2 == 0) {
        print("hurray  it's even ");
      }
      print("w is $w");
    }
    if (v % 2 == 0) {
      print("hurray  it's even ");
    }
    print("v is $v");
  }
}


//  i was just comparing dart and js dart is woopingly fast js 
// is not even close