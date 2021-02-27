import React from 'react'
import { ExclamationTriangle, House, InfoSquare, ListNested, QuestionSquare } from 'react-bootstrap-icons';

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <House className="ITJNavIcon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Catalogo',
    to: '/catalogo',
    icon: <ListNested className="ITJNavIcon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Outlet',
    to: '/outlet',
    icon: <ExclamationTriangle className="ITJNavIcon"/>,
    badge: {
      color: 'danger',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Contattaci',
    to: '/contattaci',
    icon: <QuestionSquare className="ITJNavIcon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Assistenza',
    to: '/assistenza',
    icon: <InfoSquare className="ITJNavIcon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Assistenza2',
    to: '/assistenza2',
    icon: <InfoSquare className="ITJNavIcon"/>,
  }
]

