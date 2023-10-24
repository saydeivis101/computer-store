import {createRoot} from 'react-dom/client'
import React from 'react'
import { ComputerStore } from './src/ComputerStore';
import './main.css'

const root = createRoot(document.getElementById('app'));

root.render(
  <ComputerStore/>
)