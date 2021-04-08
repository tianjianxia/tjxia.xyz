package com.tjxia.dfs.Controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
public class Controller {
    @GetMapping("/upload")
    public String upload() {
        return "upload";
    }

    @PostMapping("/upload")
    @ResponseBody
    public String upload(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return "File missing.";
        }

        String fileName = file.getOriginalFilename();
        String filePath = "/Users/itinypocket/workspace/temp/";
        File dest = new File(filePath + fileName);
        try {
            file.transferTo(dest);
            return "Success";
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "Failed";
    }

    @PostMapping("/map")
    @ResponseBody
    public String map(@RequestParam("filename") String name, )
}
