import { Button } from "@/components/ui/button";

const SkipLink = () => {
  const skipToMain = () => {
    const main = document.querySelector('main') || document.querySelector('#main-content');
    if (main) {
      main.focus();
      main.scrollIntoView();
    }
  };

  return (
    <Button
      onClick={skipToMain}
      className="sr-only focus:not-sr-only fixed top-4 left-4 z-50 bg-primary text-primary-foreground"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          skipToMain();
        }
      }}
    >
      Pular para o conteúdo principal
    </Button>
  );
};

export default SkipLink;