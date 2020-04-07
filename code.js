var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a10827ae-bf7e-459b-be24-2063517ad9d5","948032ca-676c-4ae7-b0c8-fb7ac37bec7c","f9d32744-742a-4fc5-873b-30da17044f2b","97a256c7-5445-403a-85c0-d25a0267f5c2","66ee7956-1f32-43b6-938a-374942a9d4c5","4c5a01ad-e97a-41da-a43e-180ae47aa8b9","56e09f7c-97f3-4bcf-a98f-2ce1ca9faa70","f0257459-696e-4f7a-b3b5-65f4d5ad8166","363af70c-b2cc-4e69-bbee-189086a7e276","3b05287a-c0d8-4a11-ac1e-e03042f99c21","f2a8cb9c-6b83-4a7f-afe1-c6dd835c496c","491d6651-7a19-4c49-bec6-69c198891be8","9b54685d-b2f0-41e1-a0f0-655466f554d8"],"propsByKey":{"a10827ae-bf7e-459b-be24-2063517ad9d5":{"name":"ground1","sourceUrl":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png","frameSize":{"x":1596,"y":26},"frameCount":1,"looping":true,"frameDelay":4,"version":"fXCJ8zxsX5UqUe7ddrCcKpHRt3nN_HKw","loadedFromSource":true,"saved":true,"sourceSize":{"x":1596,"y":26},"rootRelativePath":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png"},"948032ca-676c-4ae7-b0c8-fb7ac37bec7c":{"name":"cloud","sourceUrl":"assets/v3/animations/RMvIP5z9gbC5QVTMhtnVaJrbAK7UBB5ceCkXG470Jjc/948032ca-676c-4ae7-b0c8-fb7ac37bec7c.png","frameSize":{"x":92,"y":27},"frameCount":1,"looping":true,"frameDelay":4,"version":"IdRdhnxOmtO96CiqGEpbNmqDVkFlguHk","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":27},"rootRelativePath":"assets/v3/animations/RMvIP5z9gbC5QVTMhtnVaJrbAK7UBB5ceCkXG470Jjc/948032ca-676c-4ae7-b0c8-fb7ac37bec7c.png"},"f9d32744-742a-4fc5-873b-30da17044f2b":{"name":"alien","sourceUrl":"assets/api/v1/animation-library/gamelab/ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq/category_characters/alienBlue_walk.png","frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq/category_characters/alienBlue_walk.png"},"97a256c7-5445-403a-85c0-d25a0267f5c2":{"name":"ground","sourceUrl":"assets/v3/animations/HYPdYm3teVlnjQy6lmVIBnEC3WYpNM0XpPgK-nASObQ/97a256c7-5445-403a-85c0-d25a0267f5c2.png","frameSize":{"x":948,"y":235},"frameCount":1,"looping":true,"frameDelay":4,"version":"T_Yihc1J.Q3YIysmUASExFIidzTihryF","loadedFromSource":true,"saved":true,"sourceSize":{"x":948,"y":235},"rootRelativePath":"assets/v3/animations/HYPdYm3teVlnjQy6lmVIBnEC3WYpNM0XpPgK-nASObQ/97a256c7-5445-403a-85c0-d25a0267f5c2.png"},"66ee7956-1f32-43b6-938a-374942a9d4c5":{"name":"ground2","sourceUrl":"assets/v3/animations/HYPdYm3teVlnjQy6lmVIBnEC3WYpNM0XpPgK-nASObQ/66ee7956-1f32-43b6-938a-374942a9d4c5.png","frameSize":{"x":626,"y":391},"frameCount":1,"looping":true,"frameDelay":4,"version":"l6FDBV_02kcK1qFzHu59dtlM.umwWrDp","loadedFromSource":true,"saved":true,"sourceSize":{"x":626,"y":391},"rootRelativePath":"assets/v3/animations/HYPdYm3teVlnjQy6lmVIBnEC3WYpNM0XpPgK-nASObQ/66ee7956-1f32-43b6-938a-374942a9d4c5.png"},"4c5a01ad-e97a-41da-a43e-180ae47aa8b9":{"name":"obstacle1","sourceUrl":"assets/api/v1/animation-library/gamelab/mVlscciFx3AdNCGPLJDPMiYWc9.yhvJ_/category_obstacles/ore_gold.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"mVlscciFx3AdNCGPLJDPMiYWc9.yhvJ_","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mVlscciFx3AdNCGPLJDPMiYWc9.yhvJ_/category_obstacles/ore_gold.png"},"56e09f7c-97f3-4bcf-a98f-2ce1ca9faa70":{"name":"obstacle2","sourceUrl":"assets/api/v1/animation-library/gamelab/ehavfE1SSlamjhUdmzhviJ_TH2YfIpAw/category_obstacles/ore_emerald.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"ehavfE1SSlamjhUdmzhviJ_TH2YfIpAw","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ehavfE1SSlamjhUdmzhviJ_TH2YfIpAw/category_obstacles/ore_emerald.png"},"f0257459-696e-4f7a-b3b5-65f4d5ad8166":{"name":"obstacle3","sourceUrl":"assets/api/v1/animation-library/gamelab/SCuTDATs3CWnD9.mH0Ue5oFTvmdlrzP8/category_obstacles/ore_iron.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"SCuTDATs3CWnD9.mH0Ue5oFTvmdlrzP8","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SCuTDATs3CWnD9.mH0Ue5oFTvmdlrzP8/category_obstacles/ore_iron.png"},"363af70c-b2cc-4e69-bbee-189086a7e276":{"name":"obstacle4","sourceUrl":"assets/api/v1/animation-library/gamelab/wa81_Ik95NqJUJzWlrUAZU1P7HMPhR9o/category_obstacles/ore_diamond.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"wa81_Ik95NqJUJzWlrUAZU1P7HMPhR9o","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wa81_Ik95NqJUJzWlrUAZU1P7HMPhR9o/category_obstacles/ore_diamond.png"},"3b05287a-c0d8-4a11-ac1e-e03042f99c21":{"name":"obstacle5","sourceUrl":"assets/api/v1/animation-library/gamelab/jAoAQOLwJ3wYD1gl2D6Xgg5AUHkHfPWK/category_obstacles/ore_coal.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"jAoAQOLwJ3wYD1gl2D6Xgg5AUHkHfPWK","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jAoAQOLwJ3wYD1gl2D6Xgg5AUHkHfPWK/category_obstacles/ore_coal.png"},"f2a8cb9c-6b83-4a7f-afe1-c6dd835c496c":{"name":"obstacle6","sourceUrl":"assets/api/v1/animation-library/gamelab/m9x6KVw.tjQn.uHWZ7WAZptfOwgt_9mC/category_obstacles/ore_ironAlt.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"m9x6KVw.tjQn.uHWZ7WAZptfOwgt_9mC","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/m9x6KVw.tjQn.uHWZ7WAZptfOwgt_9mC/category_obstacles/ore_ironAlt.png"},"491d6651-7a19-4c49-bec6-69c198891be8":{"name":"gameOver","sourceUrl":"assets/v3/animations/HYPdYm3teVlnjQy6lmVIBnEC3WYpNM0XpPgK-nASObQ/491d6651-7a19-4c49-bec6-69c198891be8.png","frameSize":{"x":458,"y":279},"frameCount":1,"looping":true,"frameDelay":4,"version":"Y0m0x_AmaQovZAGjqMZy6D9Xw8ORRZ85","loadedFromSource":true,"saved":true,"sourceSize":{"x":458,"y":279},"rootRelativePath":"assets/v3/animations/HYPdYm3teVlnjQy6lmVIBnEC3WYpNM0XpPgK-nASObQ/491d6651-7a19-4c49-bec6-69c198891be8.png"},"9b54685d-b2f0-41e1-a0f0-655466f554d8":{"name":"alien1","sourceUrl":"assets/api/v1/animation-library/gamelab/KSRRyEm0YzV1bak7vv5cFaqcKGavf0I2/category_characters/alienBlue_jump.png","frameSize":{"x":66,"y":93},"frameCount":1,"looping":true,"frameDelay":2,"version":"KSRRyEm0YzV1bak7vv5cFaqcKGavf0I2","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":93},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KSRRyEm0YzV1bak7vv5cFaqcKGavf0I2/category_characters/alienBlue_jump.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;


//create a ground sprite
var ground = createSprite(200,200,400,20);
ground.setAnimation("ground2");
ground.scale = 2
ground.x = ground.width /2;

//create a trex sprite
var alien = createSprite(200,380,20,50);
alien.setAnimation("alien");

//scale and position the trex
alien.scale = 0.5;
alien.x = 50;
//alien.debug = true;
alien.setCollider("rectangle",0,0,200,40);
var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;

var ObstaclesGroup = createGroup();
var CloudsGroup = createGroup();
//generate some randome number here
var rand = randomNumber(1,100);
console.log(rand);
textSize(18);
textFont("purple");
textStyle("BOLD");
var count = 0;
var  gameOver = createSprite(200,300);
    gameOver.setAnimation("gameOver");
    gameOver.scale = 0.2;
function draw() {
  //set background to white
  background("white");
 if(gameState === PLAY)  {
  ground.velocityX = -(2+count/100);
    count = Math.round(World.frameCount/4);
   
     if(count>0 && count%100===0){
      playSound("checkPoint.mp3");
    }             
 // console.log(alien.y);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //jump when the space key is pressed
  if(keyDown("space")&& alien.y>=358){
    alien.velocityY = -14 ;
  }                        
  
  //add gravity
  alien.velocityY = alien.velocityY + 0.8;
  
  //stop trex from falling down
 
  
  //spawn the clouds
  spawnClouds();
  spawnObstacles();
   if(ObstaclesGroup.isTouching(alien)){
      //gameState = END;
      alien.velocityY = -14;
    }
     gameOver.visible = false;
 }
 
  else if(gameState === END) {
    ground.velocityX = 0;
    ObstaclesGroup.setVelocityXEach(0);
    CloudsGroup.setVelocityXEach(0);
    alien.setAnimation("alien1");
    CloudsGroup.setLifetimeEach(-1);
    ObstaclesGroup.setLifetimeEach(-1);
   alien.velocityY = 0;
   gameOver.visible = true;
    if(mousePressedOver(gameOver)) {
      gameState = PLAY;
      ObstaclesGroup.destroyEach();
      CloudsGroup.destroyEach();
      alien.setAnimation("alien");
     
    }
  }
 
 
 alien.collide(invisibleGround);
  
  drawSprites();
  text("Score: "+ count,40,59);
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = randomNumber(280,320);
    cloud.setAnimation("cloud");
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = alien.depth;
    alien.depth = alien.depth + 1;
    CloudsGroup.add(cloud);
  }
}
  function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -(6+count/100);
    
    //generate random obstacles
    
    var rand = randomNumber(1,6);
    obstacle.setAnimation("obstacle" + rand);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    ObstaclesGroup.add(obstacle);
}
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
