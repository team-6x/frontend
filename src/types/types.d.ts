type IndustryResponseType = {
  id: string;
  name: string;
  industries: Industry[];
};

type Industry = {
  id: string;
  name: string;
};

interface CardProps {
  img: string;
  title: string;
  text: string;
}
