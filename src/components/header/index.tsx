import React from 'react';

export interface HeaderInterface {
    title?: string;
}

export function Header({ title }: HeaderInterface) {
    return <div>{title ?? 'Sem título'}</div>;
}
