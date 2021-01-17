const express = require('express');
const router = express.Router();
const users = require('../../membersData');

function userAuth(userId){
  if(userId){
      let user = users.find(user => user.id === parseInt(userId));
      if(user.role == 'admin'){
        return true;
      }
      else{
        return false;
      }
  }
}

router.get('/', (req, res) => {
  console.log(req.headers.authorization);
  if(userAuth(req.headers.authorization)){
    res.status(200).json(users);
  }
  else{
    // return res.status(403).json({msg:'USER IS NOT AUTHOURIZED'});
    return res.json({msg:'USER IS NOT AUTHOURIZED'});
  }
});

router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
  
    if (found) {
      res.json(users.filter(user => user.id === parseInt(req.params.id)));
    } else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
  });

router.post('/', (req, res) => {
    console.log(req);
    if(userAuth(req.headers.authorization)){
      const newMember = {
        // ...req.body,
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        role: "basic",
        id: users.length+1
      };

      if (!newMember.name || !newMember.email || !newMember.age) {
          return res.status(400).json({ msg: 'Please include a name and email' });
      }
      users.push(newMember);
      res.json(users);
    }
    else{
      // return res.status(403).json({msg:'USER IS NOT AUTHOURIZED'});
      return res.json({msg:'USER IS NOT AUTHOURIZED'});

    }

    
    // res.redirect('/');
});

router.put('/:id', (req, res) => {
  if(userAuth(req.headers.authorization)){
    const found = users.some(user => user.id === parseInt(req.params.id));
    
    if (found) {
            const newUser = req.body;
            users.forEach(user=>{            
              if(user.id === parseInt(req.params.id)){
                    user.name = newUser.name ? newUser.name : user.name;
                    user.email = newUser.email ? newUser.email : user.email;
                    user.age = newUser.age ? newUser.age : user.age;
                    user.role = newUser.role ? newUser.role : user.role;
                }
            });
        //   const updMember = {...member, ...req.body};
        //   users[i] = updMember
        res.json({ msg: 'Member updated',newUser });
      }
    else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
  }
  else{
    // return res.status(403).json({msg:'USER IS NOT AUTHOURIZED'});
    return res.json({msg:'USER IS NOT AUTHOURIZED'});
  }
});

  router.delete('/:id', (req, res) => {

  if(userAuth(req.headers.authorization)){
    const found = users.some(user => user.id === parseInt(req.params.id));
  
    if (found) {
      res.json({
        msg: 'Member deleted',
        users: users.filter(user => user.id !== parseInt(req.params.id))
      });
    } else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
  }
  else{
    // return res.status(403).json({msg:'USER IS NOT AUTHOURIZED'});
    return res.json({msg:'USER IS NOT AUTHOURIZED'});
  }
  });

  module.exports = router;