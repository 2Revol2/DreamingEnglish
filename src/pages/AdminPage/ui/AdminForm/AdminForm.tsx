"use client";
import { useState } from "react";
import { Input } from "@/shared/ui/input";
import { VIDEO_LEVELS } from "@/shared/constants/levels";
import { Checkbox } from "@/shared/ui/checkbox";
import { Label } from "@/shared/ui/label";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { postVideo } from "../../api/postVideo";
import { useAddVideoFormState } from "../../model/store/useAddVideoFormStore";
import type { ChangeEvent } from "react";

const AdminForm = () => {
  const {
    url,
    thumbnail,
    setUrl,
    setThumbnail,
    setDuration,
    setLevel,
    setTitle,
    duration,
    level,
    title,
    transcription,
    setTranscription,
  } = useAddVideoFormState();

  const [durationInput, setDurationInput] = useState("");

  const onChangeUrl = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUrl(value);
    try {
      const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(value)}&format=json`);
      const data = (await response.json()) as {
        thumbnail_url: string;
        title: string;
      };
      setThumbnail(data.thumbnail_url);
      setTitle(data.title);
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeDuration = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDurationInput(value);
    const parts = value.split(":");

    if (parts.length === 3) {
      const hours = parseInt(parts[0]);
      const minutes = parseInt(parts[1]);
      const seconds = parseInt(parts[2]);

      const durationInSeconds = hours * 3600 + minutes * 60 + seconds;
      setDuration(durationInSeconds);
    } else if (parts.length === 2) {
      const minutes = parseInt(parts[0]);
      const seconds = parseInt(parts[1]);
      const durationInSeconds = minutes * 60 + seconds;
      setDuration(durationInSeconds);
    } else if (parts.length === 1) {
      setDuration(Number(parts[0]));
    }
  };

  const onAddVideo = async () => {
    await postVideo({
      url,
      thumbnail,
      duration,
      level: level!,
      title,
      transcription,
    });

    setUrl("");
    setDuration(0);
    setDurationInput("");
    setTranscription("");
    setTitle("");
    setThumbnail("");
  };

  return (
    <div>
      <div className={"flex flex-col gap-3 max-w-3xl rounded-xl"}>
        <div>
          <Input value={url} onChange={onChangeUrl} placeholder={"Video url"} />
          <h4>{title}</h4>
          {thumbnail ? <img src={thumbnail} className={"max-w-3xs"} /> : null}
        </div>
        <div>
          <Input value={durationInput} placeholder={"duration hh:mm:ss, mm:ss or ss"} onChange={onChangeDuration} />
          {duration ? <p>{duration}</p> : null}
        </div>
        <div className={"flex gap-3 mb-3"}>
          {VIDEO_LEVELS.map((item) => {
            return (
              <div className="flex items-center gap-1" key={item.value}>
                <Checkbox checked={item.value === level} id={item.value} onCheckedChange={() => setLevel(item.value)} />
                <Label htmlFor={item.value}>{item.text}</Label>
              </div>
            );
          })}
        </div>
      </div>

      <Textarea
        className={"mb-3"}
        placeholder={"Transcription"}
        value={transcription}
        onChange={(e) => setTranscription(e.target.value)}
      />

      <Button onClick={onAddVideo}>Add video</Button>
    </div>
  );
};

export default AdminForm;
