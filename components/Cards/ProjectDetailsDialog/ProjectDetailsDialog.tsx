import React from "react";
import { Project } from "content-collections";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProjectContent from "./ProjectContent";

interface ProjectDetailsDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDetailsDialog = ({ project, open, onOpenChange }: ProjectDetailsDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] p-0 overflow-hidden bg-bg border-iconBg sm:max-w-[95vw] lg:max-w-5xl flex flex-col gap-0">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <DialogDescription className="sr-only">
          Detailed technical case study for the {project.title} project.
        </DialogDescription>
        
        <ScrollArea className="h-full w-full">
          <div className="flex flex-col px-6 py-12 lg:px-12">
            <ProjectContent project={project} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
