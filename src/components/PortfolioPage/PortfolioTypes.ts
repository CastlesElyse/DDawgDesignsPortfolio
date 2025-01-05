export interface ContentPieceProps {
    title: string;
    slug: string;
    imgSmall: string;
    alt: string;
    date: string;
    
}

export interface PortfolioPieceProps {
    portfolioPiece: ContentPieceProps;
    index: number;
}