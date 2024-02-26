import 'package:basiclogin/signuppage.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget
{
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context)
  {
    return Scaffold(
      appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.white,
          leading: IconButton(
            onPressed: (){
              Navigator.pop(context);
            },
            icon: Icon(Icons.arrow_back_ios),
            iconSize: 20,
            color: Colors.black,
          )
      ),
      body: Container(
        width: double.infinity,
        height: double.infinity,
        decoration: BoxDecoration(
          gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0xe93b47), Color(0xffCD82DE)]
          )
        ),
        child: SingleChildScrollView(
          padding: EdgeInsets.all(MediaQuery.of(context).size.height*0.03),
          child: Column(
            children: [
              SizedBox(height: 20),
              Image(image: AssetImage('assets/images/splash/delivery-logo.png')),
              SizedBox(height: 70),
              Text('Welcome Food App', textAlign: TextAlign.center ,style: TextStyle(
                fontWeight: FontWeight.w600, fontSize: 18, color: Colors.white.withOpacity(0.7)
              )),
              SizedBox(height: 10),
              Text('Please, Login', textAlign: TextAlign.center ,style: TextStyle(
                  fontWeight: FontWeight.w600, fontSize: 24, color: Colors.white.withOpacity(0.7)
              )),
              SizedBox(height: 30),
              TextField(
                keyboardType: TextInputType.emailAddress,
                style: TextStyle(color: Colors.black),
                decoration: InputDecoration(
                  contentPadding: EdgeInsets.symmetric(vertical: 25.0),
                  filled: true,
                  hintText: 'Type your email address',
                  prefixIcon: IconButton(
                    onPressed: (){},
                    icon: Image(image: AssetImage('assets/images/icons/user.png')),
                  ),
                  fillColor: Colors.white,
                  border: OutlineInputBorder(
                    borderSide: BorderSide.none,
                    borderRadius: BorderRadius.circular(35)
                  )
                ),
              ),
              SizedBox(height: 15),
              TextField(
                keyboardType: TextInputType.text,
                style: TextStyle(color: Colors.black),
                decoration: InputDecoration(
                    contentPadding: EdgeInsets.symmetric(vertical: 25.0),
                    filled: true,
                    hintText: 'Type your password',
                    prefixIcon: IconButton(
                      onPressed: (){},
                      icon: Image(image: AssetImage('assets/images/icons/password.png')),
                    ),
                    fillColor: Colors.white,
                    border: OutlineInputBorder(
                        borderSide: BorderSide.none,
                        borderRadius: BorderRadius.circular(35)
                    )
                ),
              ),
              SizedBox(height: 20),
              CupertinoButton(
                  child: Container(
                    height: 60,
                    width: double.infinity,
                    alignment: Alignment.center,
                    child: Text('Continue', style: TextStyle(
                        color: Colors.white,
                        fontSize: 20,
                        fontWeight: FontWeight.bold
                    )),
                    decoration: BoxDecoration(
                      color: Color(0xffbf343c),
                      borderRadius: BorderRadius.circular(40)
                    ),
                  ),
                  onPressed: (){}
              ),
              SizedBox(height: 10),
              TextButton(
                  onPressed: (){
                    Navigator.push(context, MaterialPageRoute(builder: (context) => SignupPage()));
                  },
                  child:
                  Text('Create an Account', style: TextStyle(
                      color: Colors.white, fontSize: 18
                  ))
              )
            ],
          ),
        ),
      )
    );
  }
}