import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Shield, Zap, Users, GitBranch, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { WebsiteTour } from "@/components/WebsiteTour";
import { ThemeToggle } from "@/components/ThemeToggle";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ZeroLock</span>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/architecture">Architecture</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/deadlock-info">Learn</Link>
            </Button>
            <ThemeToggle />
            <Button asChild size="sm">
              <Link to="/auth">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient" />
        
        <div className="container relative mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 animate-fade-in">
              <Activity className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-medium">Real-Time Collaborative Platform</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl animate-fade-in" style={{animationDelay: "0.1s"}}>
              Intelligent <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">Deadlock Detection</span> for Teams
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl animate-fade-in" style={{animationDelay: "0.2s"}}>
              Revolutionary collaboration platform with automatic conflict resolution. 
              Powered by User-Resource Interaction Graph (URIG) analysis and real-time deadlock detection.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{animationDelay: "0.3s"}}>
              <Button asChild size="lg" className="gap-2 hover-scale">
                <Link to="/auth">
                  Get Started <Zap className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale">
                <Link to="/deadlock-info">
                  Learn About Deadlocks
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="hover-scale">
                <Link to="/architecture">
                  View Architecture
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Core Technology Modules</h2>
          <p className="text-lg text-muted-foreground">
            Four specialized microservices working in harmony
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in hover-scale group">
            <Users className="mb-4 h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="mb-2 text-xl font-semibold">Real-Time State Manager</h3>
            <p className="text-sm text-muted-foreground">
              WebSocket-based state tracking with in-memory lock management
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in hover-scale group" style={{animationDelay: "0.1s"}}>
            <GitBranch className="mb-4 h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="mb-2 text-xl font-semibold">URIG Constructor</h3>
            <p className="text-sm text-muted-foreground">
              Dynamic graph building with adjacency list representation
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in hover-scale group" style={{animationDelay: "0.2s"}}>
            <AlertCircle className="mb-4 h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="mb-2 text-xl font-semibold">Conflict Detection Engine</h3>
            <p className="text-sm text-muted-foreground">
              DFS-based cycle detection with three-color node tracking
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in hover-scale group" style={{animationDelay: "0.3s"}}>
            <Shield className="mb-4 h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="mb-2 text-xl font-semibold">Resolution Advisor</h3>
            <p className="text-sm text-muted-foreground">
              Heuristic-based conflict resolution with scoring algorithms
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Advanced graph theory meets real-time collaboration
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-8">
            <div className="flex gap-4 animate-fade-in hover:translate-x-2 transition-transform duration-300">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold animate-pulse">
                1
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">User-Resource Interaction Graph</h3>
                <p className="text-muted-foreground">
                  Every collaborative session is modeled as a directed graph with User Nodes (U) and Component Nodes (C). 
                  Lock edges (C→U) and Wait edges (U→C) represent the current state of resource allocation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{animationDelay: "0.2s"}}>
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold animate-pulse" style={{animationDelay: "0.2s"}}>
                2
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Cycle Detection via DFS</h3>
                <p className="text-muted-foreground">
                  Our Conflict Detection Engine executes a Depth-First Search traversal with three-color node tracking. 
                  A deadlock exists if and only if the URIG contains at least one cycle.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{animationDelay: "0.4s"}}>
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold animate-pulse" style={{animationDelay: "0.4s"}}>
                3
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Intelligent Resolution</h3>
                <p className="text-muted-foreground">
                  Upon detection, the Resolution Advisor analyzes user roles, idle times, session duration, and active locks 
                  to recommend optimal conflict resolution strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="relative overflow-hidden p-12 text-center hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 animate-gradient" />
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold">Ready to Eliminate Deadlocks?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join teams using our platform to collaborate without conflicts
            </p>
            <Button asChild size="lg" className="hover-scale animate-pulse-glow">
              <Link to="/auth">Start Collaborating Now</Link>
            </Button>
          </div>
        </Card>
      </section>

      <WebsiteTour autoStart />

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Collaborative Deadlock Detection Platform. Built with advanced graph algorithms.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;