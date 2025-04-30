import React from 'react';
 

export function isReactClassComponent(value: any): value is React.ComponentType<any> {
    return (
      typeof value === 'function' && value.prototype && !!value.prototype.isReactComponent
    );
}


export function isReactFunctionComponent(value: any): value is React.ComponentType<any> {
    return (
      typeof value === 'function' &&
      String(value).includes('return') &&
      !!String(value).match( /react(\d+)?./i) &&
      String(value).includes('.createElement')
    );
}
  
export function isReactComponent(value: any): value is React.ComponentType<any> {
    return isReactClassComponent(value) || isReactFunctionComponent(value);
}
  