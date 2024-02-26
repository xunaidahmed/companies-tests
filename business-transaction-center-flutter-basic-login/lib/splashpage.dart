import 'dart:typed_data';

import 'package:basiclogin/loginpage.dart';
import 'package:basiclogin/signuppage.dart';
import 'package:flutter/material.dart';

class SplashPage extends StatelessWidget
{
  const SplashPage({super.key});

  @override
  Widget build(BuildContext context)
  {
    return Scaffold(
      body: SafeArea(
        child:
        Container(
          width: double.infinity,
          height: MediaQuery.of(context).size.height,
          decoration: BoxDecoration(
              gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Color(0xe93b47), Color(0xffCD82DE)]
              )
          ),
          padding:EdgeInsets.symmetric(horizontal: 30, vertical: 50),
          child:
          Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Column(
                children: [
                  Column(
                    children: [
                      Text('Welcome', style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 30,
                      )),
                      SizedBox( height: 20),
                      Text(
                          'When you order eat street, we\'ll hook you up with exculive coupons, specials rewards',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.grey,
                            fontSize: 15
                          )
                      )
                    ],
                  )
                ],
              ),
              Container(
                height: MediaQuery.of(context).size.height/3,
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage('assets/images/splash/delivery-logo.png')
                  )
                ),
              ),
              Column(
                children: [
                  MaterialButton(
                    minWidth: double.infinity,
                    height: 60,
                    onPressed: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context) => LoginPage()));
                    },
                    color: Colors.white,
                    shape: RoundedRectangleBorder(
                      side: BorderSide( color: Colors.black ),
                      borderRadius: BorderRadius.circular(50)
                    ),
                    child: Text('Login', style: TextStyle(
                      fontWeight: FontWeight.w300,
                      fontSize: 18
                    )),
                  ),
                  SizedBox(height: 20),
                  MaterialButton(
                      minWidth: double.infinity,
                      height: 60,
                      color: Color(0xffbf343c),
                      shape: RoundedRectangleBorder(
                        side: BorderSide(color: Colors.black),
                        borderRadius: BorderRadius.circular(50)
                      ),
                      onPressed: (){
                        Navigator.push(context, MaterialPageRoute(builder: (context) => SignupPage()));
                      },
                      child: Text('Sign Up', style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w500,
                        fontSize: 18
                      )),
                  )
                ],
              )
            ],
          )
        )
      )
    );
  }
}