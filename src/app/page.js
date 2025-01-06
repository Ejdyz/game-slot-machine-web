"use client"
import { useEffect, useState, useRef } from "react"
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import dynamic from "next/dynamic"
import confetti from "canvas-confetti";

const Wheel = dynamic(() =>
  import('react-custom-roulette').then((mod) => mod.Wheel), 
  { ssr: false }
)

const data = [
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '1', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '2', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '3', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '4', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '5', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '6', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '7', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '8', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '9', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '10', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '11', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '12', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '13', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '14', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '15', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '16', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '17', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '18', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '19', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '20', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '21', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '22', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '23', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '24', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '25', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '26', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '27', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '28', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '29', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '30', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '31', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '32', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '33', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '34', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '35', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '36', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '37', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '38', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '39', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '40', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '41', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '42', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '43', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '44', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '45', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '46', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '47', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '48', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '49', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '50', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a01', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a02', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a03', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a04', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a05', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a06', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a07', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a08', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a09', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a10', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a11', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a12', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a13', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a14', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a15', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a16', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a17', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a18', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a19', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a20', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a21', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a22', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a23', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a24', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a25', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a26', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a27', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a28', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a29', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a30', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a31', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a32', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a33', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a34', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a35', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a36', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a37', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a38', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a39', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a40', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a41', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a42', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a43', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a44', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a45', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a46', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a47', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a48', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a49', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a50', style: { textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '1', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '2', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '3', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '4', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '5', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '6', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '7', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '8', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '9', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '10', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '11', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '12', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '13', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '14', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '15', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '16', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '17', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '18', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '19', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '20', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '21', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '22', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '23', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '24', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '25', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '26', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '27', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '28', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '29', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '30', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '31', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '32', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '33', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '34', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '35', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '36', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '37', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '38', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '39', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '40', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '41', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '42', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '43', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '44', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '45', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '46', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '47', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '48', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '49', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {gameName:"Grant Theft Auto V", key:"ASDJNASD-ASD-ASDASDAS-DASDASD", winType:"win", optional: '50', style: { backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a01', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a02', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a03', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a04', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a05', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a06', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a07', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a08', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a09', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a10', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a11', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a12', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a13', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a14', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a15', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a16', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a17', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a18', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a19', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a20', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a21', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a22', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a23', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a24', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a25', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a26', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a27', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a28', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a29', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a30', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a31', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a32', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a33', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a34', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a35', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a36', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a37', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a38', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a39', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a40', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a41', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a42', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a43', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a44', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a45', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a46', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a47', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a48', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a49', style: { textColor: 'white' } },
  {key:null, winType:"lose", optional: 'a50', style: { textColor: 'white' } },
]

export default function Home() {
  const [spinning, setSpinning] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef(null);
  const spinningRef = useRef(false)

  // const shuffleArray = (data) => {
  //   for (let i = data.length - 1; i > 0; i--) {
  //     const buf = crypto.randomBytes(4);
  //     const randomIndex = buf.readUInt32BE(0) % (i + 1);
  //     [data[i], data[randomIndex]] = [data[randomIndex], data[i]];
  //   }

  //   let index = 0;
  //   const newData = [...data];
  //   for (let i = 0; i < newData.length; i++) {
  //     newData[i] = data[index];
  //     index++;
  //   }
  //   return newData;
  // }

  const confettiStorm = () => {
    var end = Date.now() + (3 * 1000);
    // var colors = ['#bb0000', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: Math.floor(Math.random() * 10),
        angle: 60,
        spread: 55,
        zIndex:2000,
        origin: { x: 0 },
        // colors: colors
      });
      confetti({
        particleCount: Math.floor(Math.random() * 10),
        angle: 120,
        spread: 55,
        zIndex:2000,
        origin: { x: 1 },
        // colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }

  useEffect(() => {
    if(!rootRef.current) return;

    rootRef.current.focus();

    const handleSpinClick = () => {
      if (!spinning && !spinningRef.current) {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setSpinning(true);
        spinningRef.current = true;
      }
    }

    const currentRef = rootRef.current;
    currentRef.addEventListener("keydown", handleSpinClick);

    return () => {
      currentRef.removeEventListener("keydown", handleSpinClick);
    };
  }, []);

  const handleSpinEnd = () => {
    spinningRef.current = false;
    setSpinning(false);
    setVisible(true);
    if (data[prizeNumber].winType === "win") {
      confettiStorm()
    }
  }
  
  return (
    <>
      <div tabIndex={0} ref={rootRef} className="w-screen flex justify-center items-center h-[100dvh] overflow-hidden">
        <div className="scale-[170%]">
          <Wheel
            outerBorderWidth={1}
            radiusLineWidth={1}
            spinDuration={1}
            mustStartSpinning={spinning}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              handleSpinEnd();
            }}
          />
        </div>
      </div>
      <Dialog header={data[prizeNumber].winType === "win"? <h1 className="text-green-500 ">🥳 Výhra!</h1> : <h1 className="text-red-500">😭 Prohra</h1>} visible={visible} style={{ width: '50vw' }} draggable={false} onHide={() => {if (!visible) return; setVisible(false); }}>
        {data[prizeNumber].winType === "win" 
          ?
          <div>
            <h1 className="text-xl">Vyhráváte hru:</h1>
            <h1 className="text-3xl text-center font-semibold">{data[prizeNumber].gameName}</h1>
            <h1 className="text-2xl text-center">{data[prizeNumber].key.toUpperCase()}</h1>
            <p>Klíč si <strong>vyfoťte</strong> a vložte do služby Steam.</p>
          </div>
          :(<div>Příště to určitě vyjde!</div>)
        }
      </Dialog>
    </>
  )
}
