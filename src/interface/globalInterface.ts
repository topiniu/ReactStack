import * as React from 'react';

export interface NAVITEM {
  label: string,
  path: string,
  exact: boolean,
  component: React.ComponentClass
}

export interface STOREACTIONINTER {
  type: string,
  payload: any
}