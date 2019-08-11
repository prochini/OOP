function talk(){
  console.log(this.sound)
}
let boromir ={
  sound: 'one does not simply walk into mordor'
}
let talkBoundToBoromir = talk.bind(boromir)
talkBoundToBoromir()
talk()

let talk = function(){
  console.log(this.sound)
}
let boromir ={
  speak: talk,
  sound: 'one does not simply walk into mordor'
}
let talkBoundToBoromir = talk.bind(boromir)
boromir.speak()

this 預設是指到 window 物件
this 指向誰
bind 指向
