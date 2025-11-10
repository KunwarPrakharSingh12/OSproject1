import { useState, useEffect } from "react";
import Joyride, { Step, CallBackProps, STATUS } from "react-joyride";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { useLocation } from "react-router-dom";

interface WebsiteTourProps {
  autoStart?: boolean;
}

export function WebsiteTour({ autoStart = false }: WebsiteTourProps) {
  const [run, setRun] = useState(autoStart);
  const location = useLocation();

  const landingSteps: Step[] = [
    {
      target: "body",
      content: "Welcome to ZeroLock! This tour will show you all the features of our intelligent deadlock detection platform.",
      placement: "center",
      disableBeacon: true,
    },
    {
      target: ".hero-section",
      content: "ZeroLock uses advanced graph algorithms to detect and resolve deadlocks in real-time collaborative environments.",
      placement: "bottom",
    },
    {
      target: ".features-section",
      content: "Our platform is built on four specialized microservices working together to ensure conflict-free collaboration.",
      placement: "top",
    },
    {
      target: ".how-it-works-section",
      content: "Learn how we use User-Resource Interaction Graphs (URIG) and DFS cycle detection to identify deadlocks.",
      placement: "top",
    },
  ];

  const demoSteps: Step[] = [
    {
      target: "body",
      content: "Welcome to the Demo page! Here you can create and analyze deadlock scenarios.",
      placement: "center",
      disableBeacon: true,
    },
    {
      target: "[data-tour='resource-config']",
      content: "Configure the number of resources and processes for your deadlock simulation.",
      placement: "bottom",
    },
    {
      target: "[data-tour='process-input']",
      content: "Define processes with their held and requested resources. Example: P1 holds R1 and requests R2.",
      placement: "right",
    },
    {
      target: "[data-tour='resource-graph']",
      content: "This graph visualizes the wait-for relationships. Red highlights indicate detected deadlock cycles.",
      placement: "left",
    },
    {
      target: "[data-tour='detect-button']",
      content: "Click here to run the deadlock detection algorithm on your scenario.",
      placement: "top",
    },
    {
      target: "[data-tour='scenario-manager']",
      content: "Save and load scenarios for later analysis using the Scenario Manager.",
      placement: "bottom",
    },
  ];

  const dashboardSteps: Step[] = [
    {
      target: "body",
      content: "This is your Dashboard - your central hub for managing collaborative boards.",
      placement: "center",
      disableBeacon: true,
    },
    {
      target: "[data-tour='create-board']",
      content: "Create new collaborative boards for your team projects.",
      placement: "bottom",
    },
    {
      target: "[data-tour='board-list']",
      content: "All your boards are displayed here. Click any board to open it.",
      placement: "top",
    },
  ];

  const getSteps = (): Step[] => {
    switch (location.pathname) {
      case "/":
        return landingSteps;
      case "/demo":
        return demoSteps;
      case "/dashboard":
        return dashboardSteps;
      default:
        return [];
    }
  };

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
      localStorage.setItem("tourCompleted", "true");
    }
  };

  useEffect(() => {
    const tourCompleted = localStorage.getItem("tourCompleted");
    if (!tourCompleted && autoStart) {
      setTimeout(() => setRun(true), 1000);
    }
  }, [autoStart]);

  return (
    <>
      <Button
        onClick={() => setRun(true)}
        variant="outline"
        size="sm"
        className="fixed bottom-4 right-4 z-50 shadow-lg animate-pulse-glow"
        data-tour="tour-button"
      >
        <Info className="h-4 w-4 mr-2" />
        Start Tour
      </Button>

      <Joyride
        steps={getSteps()}
        run={run}
        continuous
        showProgress
        showSkipButton
        callback={handleJoyrideCallback}
        styles={{
          options: {
            primaryColor: "hsl(var(--primary))",
            zIndex: 10000,
          },
          tooltip: {
            borderRadius: "8px",
            padding: "20px",
          },
          buttonNext: {
            backgroundColor: "hsl(var(--primary))",
            borderRadius: "6px",
            padding: "8px 16px",
          },
          buttonBack: {
            color: "hsl(var(--muted-foreground))",
            marginRight: "8px",
          },
        }}
        locale={{
          back: "Back",
          close: "Close",
          last: "Finish",
          next: "Next",
          skip: "Skip",
        }}
      />
    </>
  );
}
